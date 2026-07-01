module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();

    if (!name || !email) {
      return response.status(400).json({ ok: false, error: "missing_fields" });
    }

    if (!process.env.RESEND_API_KEY) {
      return response.status(200).json({
        ok: true,
        queued: false,
        providerConfigured: false
      });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "Maktabat <noreply@maktabatchs.org>",
        to: [email],
        subject: "Bienvenue sur Maktabat Cheikh Abdoul Hamid Sarr",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111111">
            <h1 style="margin:0 0 16px;color:#eb1c24">Bienvenue ${escapeHtml(name)}</h1>
            <p>Bienvenue sur Maktabat Cheikh Abdoul Hamid Sarr.</p>
            <p>Votre compte a bien ete cree. Vous pouvez desormais acceder a votre espace personnel et decouvrir nos contenus.</p>
            <p style="margin-top:20px;color:#666666">Maktabat Cheikh Abdoul Hamid Sarr</p>
          </div>
        `
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return response.status(502).json({
        ok: false,
        error: "email_provider_error",
        detail: errorText
      });
    }

    return response.status(200).json({
      ok: true,
      queued: true,
      providerConfigured: true
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      error: "unexpected_error",
      detail: error instanceof Error ? error.message : "unknown_error"
    });
  }
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
