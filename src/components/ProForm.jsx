"use client";
// Organisation des imports
// React, hooks, librairies
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function ProForm() {

    const formActionUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL_PRO;

    return (

        <>
            <div 						className="max-w-md mx-auto relative overflow-hidden z-10 bg-secondary p-8 rounded-lg shadow-md 
                        before:w-24 before:h-24 before:absolute before:bg-orange before:rounded-full before:-z-10 before:blur-2xl
                        after:w-32 after:h-32 after:absolute after:bg-blue after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
>
               <h2 className="text-2xl text-primary font-bold mb-6">Formulaire pour les entreprises</h2>
                <form
                    action={formActionUrl}
                    method="POST"
                    // onsubmit={handleValidation}
                    >
                    <div className="mb-4">
                        <label
                    	    className="block text-sm font-medium text-gray-600"
                            htmlFor="companyName"
                        >
                        Nom de votre entreprise:
                        </label>
                        <input 
                            type="text" 
                            name="companyName" 
                            id="companyName"
                            required />
                    </div>
                     <div className="mb-4">                   
                    <label
                        htmlFor="name">
                        Votre Nom:
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        required />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="position">
                        Votre fonction au sein de l'entreprise:
                    </label>
                    <input 
                        type="text" 
                        name="position" 
                        id="position"
                        required />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="coachedPosition">
                        Fonction de la personne à accompagner:
                    </label>
                    <input 
                        type="text" 
                        name="coachedPosition" 
                        id="coachedPosition"
                        required
                         />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="email">
                        Votre email professionnel:
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="telephone">
                        Votre numéro de téléphone:
                    </label>
                    <input 
                        type="tel" 
                        name="telephone" 
                        id="telephone"
                        required />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="messageProblems">
                        Description des problématiques rencontrées et objectifs visés:
                    </label>
                    <textarea 
                        name="messageProblems" 
                        rows="20" 
                        id="messageProblems"
                        required>
                    </textarea>
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="messageSolutions">
                        Solutions déjà envisagées si applicable:
                    </label>
                    <textarea 
                        name="messageSolutions" 
                        rows="20" 
                        id="messageSolutions"
                        >
                    </textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                 </form>
            </div>
        </>
    )
    }
