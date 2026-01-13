export async function POST(request) {
    try {

        const { FORMSPREE_URL_PRO } = process.env;
        if (!FORMSPREE_URL_PRO) {
  return new Response(
    JSON.stringify({ ok: false, error: "URL Formspree manquante" }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
        }

        const contentType = request.headers.get("content-type") || "";
        const isForm =
            contentType.includes("multipart/form-data") ||
            contentType.includes("application/x-www-form-urlencoded");

        if (!isForm) {
            return new Response(
                JSON.stringify({ ok: false, error: "Requête invalide : formulaire attendu." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const formData = await request.formData();

        const response = await fetch(FORMSPREE_URL_PRO, {
            method: "POST",
            body: formData,
        });

        const text = await response.text();

        if (!response.ok) {
            return new Response(
                JSON.stringify({ 
                    ok: false,
                    error: "Erreur lors de l'envoi du formulaire", 
                    details: text }),
                { status: response.status, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ 
                ok: true,
                message: "Formulaire envoyé avec succès", 
                //details: text 
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Erreur dans l'API Formspree Pro :", error);
        return new Response(
            JSON.stringify({ ok: false, error: "Erreur lors du traitement de la requête" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
}
}