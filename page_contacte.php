<?php
session_start() ;
$host = 'mysql-abracadabra.alwaysdata.net';
$dbname = 'abracadabra_db1';
$user = '388534';
$password = 'BKbx3Mi7Qjs6;Fi8Kis3'; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

//insertion des infos saisie dans la table rep_contact
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $prenom =htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']) ;
    $email =  htmlspecialchars($_POST['email']) ;
    $message = htmlspecialchars($_POST['message']) ;

    $query = $pdo->prepare("INSERT INTO rep_contact (prenom, nom, email, message) VALUES (?, ?, ?, ?)");
    $query->execute([$prenom, $nom, $email, $message]);

    // Redirection vers la même page sans modifier l'URL
    header("Location: " . $_SERVER['PHP_SELF']);

    // Enregistrer le succès dans la session
    $_SESSION['success'] = 'Votre message a été envoyé avec succès !';
        
    

    exit();
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <!-- Définir le jeu de caractères de la page pour s'assurer que les caractères spéciaux sont bien affichés -->
    <meta charset="UTF-8">
    <!-- Définir la configuration pour que la page soit responsive sur les appareils mobiles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Contact</title>
    <link rel="stylesheet" href="/page_contact/style45.css"> 

    <script>
        // Vérifier si un thème est enregistré dans le localStorage
        (function() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
            } else {
                document.documentElement.setAttribute('data-theme', 'clair'); // Thème par défaut
            }
        })();
    </script>
    
    <!-- Le début du corps de la page, avec un arrière-plan dégradé de couleurs -->
    <body style="background: linear-gradient(90deg, var(--arriere-plan-1), var(--arriere-plan-2))">

        <!-- Bandeau de haut de page contenant des boutons pour la navigation -->
        <div class="header">
            <!-- Bouton "Maison" aligné à gauche qui exécute la fonction maison() au clic -->
            <button class="primary-button left " onclick="Maison()">Maison</button>

            <!-- Bouton "Connecter" aligné à droite qui exécute la fonction connection() au clic -->
            <button class="primary-button right" onclick="window.location.href='/page_connexion/page_connexion.html'" >Connexion</button>
        </div>
        <!-- Image cliquable -->
        <img id="clickable-img" src="/page_contact/corde_pendu.png" alt="Image" width="99,5" height="102,4" >
        <!-- Section principale contenant le formulaire de contact -->
        <section class="section_contacte">
            <!-- conteneur qui contient l'ensemble du formulaire et des informations de contact -->
            <div class="conteneur">
                <!-- Grid contenant deux sections : le formulaire et les informations de contact -->
                <div class="layout-grid contact-grid">
                    <div class="conatct-card">
                        <div class="form-block form">

                            <!-- Formulaire permettant de collecter des informations de contact -->
                            <form name="email-form" data-name="Email Form" method="POST" class="form">
                                <!-- Champ pour le prénom de l'utilisateur -->
                                <div class="form-input-wrapper">
                                    <label for="prenom" class="prenom">Prenom<span class="oblige">*</span></label>
                                    <input class="text-field input" maxlength="256" name="prenom" data-name="prenom" placeholder="Prenom" type="text" id="prenom" required >
                                </div>

                                <!-- Champ pour le nom de l'utilisateur -->
                                <div class="form-input-wrapper">
                                    <label for="nom" class="nom">Nom<span class="oblige">*</span></label>
                                    <input class="text-field input" maxlength="256" name="nom" data-name="nom" placeholder="Nom" type="text" id="nom" required >
                                </div>

                                <!-- Champ pour l'email de l'utilisateur -->
                                <div class="form-input-wrapper">
                                    <label for="email" class="email">Adresse mail<span class="oblige">*</span></label>
                                    <input class="text-field input" maxlength="256" name="email" data-name="email" placeholder="Adresse Mail" type="email" id="email" required >
                                </div>

                                <!-- Champ pour le message de l'utilisateur -->
                                <div class="form-input-wrapper">
                                    <label for="message" class="message">Message<span class="oblige">*</span></label>
                                    <textarea placeholder="Votre message" maxlength="5000" name="message" data-name="message" required class="text-field input" id="message"></textarea>
                                </div>

                                <!-- Bouton d'envoi du message -->
                                <div class="form-input-wrapper">
                                    <input type="submit" data-wait="Veuillez patienter..." class="primary-button" value="Envoyer le message" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Section contenant des informations additionnelles -->
                    <div class="contact-wrapper">
                        <h1 class="heading margin-bottom-8">Besoin d'aide</h1>
                        <p class="paragraph ">
                            
                            <h3>De rire ou simplement d'une oreille attentive ?</h3>
                            <p>
                                N'hésitez pas à nous envoyer un message via ce formulaire ! Vous pouvez :
                            </p>
                            <!-- Liste d'actions possibles -->
                            <ul>
                                <li>Signaler un problème sur le site,</li>
                                <li>Demander plus d'informations,</li>
                                <li>Ou tout simplement discuter avec nous si vous vous sentez seul(e) face à votre écran.</li>
                            </ul>
                            <p>
                                Et si vous avez une blague (même un peu nulle), ne vous retenez pas :
                                <strong>on adore l'humour!</strong>
                            </p>
                            <p>On est là pour vous, que ce soit pour un souci technique ou un moment de légèreté</p>

                            <!-- Liste des contacts -->
                            <div class="contact-list">
                                <div class="contact-divider-line"></div>
                                <div class="contact-list-item">
                                    <a href="mailto:abracadabra@alwaysdata.net" class="contact-links">abracadabra@alwaysdata.net</a>
                                </div>
                                <div class="contact-divider-line"></div>
                                <a href="tel:+33 6 33 26 77 23" class="contact-links">+33 6 33 26 77 23</a>
                            </div>
                            <div class="contact-divider-line"></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section du pied de page contenant des liens et les crédits -->
        <div class="section section-footer">
            <div class="conteneur conteneur-footer">
                <div class="footer-bottom-links">
                    <div class="layout-grid footer-bottom-links-grid">
                        <!-- Liens du bas de la page -->
                        <a href="/system/licences" class="footer-link">Licenses</a>
                        <a href="/system/Source" class="footer-link">Source et Mediat utiliser</a>
                        <div class="footer-link">
                            <p class="footer-text ">Fait par <a href="http://acompleter.com" target="_blank" class="footer-link "><u>Dev'Lopper</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php if (isset($_SESSION['success'])): ?>
        <div id="notification" class="notification">
            <p><?php echo htmlspecialchars($_SESSION['success']); ?></p>
        </div>
        <?php unset($_SESSION['success']); // Supprimer le message de succès après l'affichage ?>
        <?php endif; ?>


        <script>
        // La notification disparait après 4 secondes
        document.addEventListener('DOMContentLoaded', () => {
            const notification = document.getElementById('notification');
            if (notification) {
                setTimeout(() => {
                    notification.remove();
                }, 4000); // 4 secondes
            }
        });
        </script>




    <!-- Lien vers les feuilles de style -->
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    <!-- Lien vers le fichier JavaScript contenant les fonctions remplisage aleatoir -->
    <script type="text/javascript" src="/page_contact/form_aleatoir.js"></script>
    <script type="text/javascript" src="/page_contact/jour_nuit_disco.js"></script>
    <!--script type="text/javascript" src="/page_contact/themeBase.js"></script-->
    </body>

    

</html>
