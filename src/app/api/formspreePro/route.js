export async function POST(request) {
    try {

        const { FORMSPREE_URL_PRO } = process.env;
        if (!FORMSPREE_URL_PRO) {
            return new Response(
                JSON.stringify({ error: "URL Formspree manquante" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        const formData = await request.formData();
        const response = await fetch(FORMSPREE_URL_PRO, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(
                JSON.stringify({ error: "Erreur lors de l'envoi du formulaire", details: errorData }),
                { status: response.status, headers: { "Content-Type": "application/json" } }
            );
        }

        const responseData = await response.json();
        return new Response(
            JSON.stringify({ message: "Formulaire envoyé avec succès", data: responseData }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Erreur dans l'API Formspree Pro :", error);
        return new Response(
            JSON.stringify({ error: "Erreur lors du traitement de la requête" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
}
}