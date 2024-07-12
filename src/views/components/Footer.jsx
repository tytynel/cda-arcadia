import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <h2>footer</h2>
                <article className="footer-section-comment">
                    {/* Comment button */}
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasComment" aria-controls="offcanvasComment">
                        <i class="bi bi-chat"></i>Partager votre expérience
                    </button>
                    <div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasComment" aria-labelledby="offcanvasCommentLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasCommentLabel">Partagez votre expérience avec nous!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body small footer-offcanvas">
                            {/* Comment form */}
                            <form className="mb-3">
                                    <div className="mb-3">
                                        <label for="pseudoId" ><i class="bi bi-person"></i> Pseudonyme:</label>
                                        <input required type="text" className="form-control" id="pseudoId" value="" minlength="5" maxlength="30" size="30"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="commentTxt" ><i class="bi bi-chat-right-dots"></i> Commentaire :</label>
                                        <textarea required className="form-control" id="commentTxt" rows="4" minlength="30" maxlength="250" size="250"/>
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3"><i class="bi bi-send"></i> Envoyer</button>
                                    </div>
                            </form>

                        </div>
                    </div>
                </article>
                
                <article className="footer-section-contact">
                    {/* Contact button */}
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasContact" aria-controls="offcanvasContact">
                        <i class="bi bi-envelope"></i>Nous contacter
                    </button>
                    <div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasContact" aria-labelledby="offcanvasContactLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasContactLabel">Nous contacter ?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body small">
                            ...
                        </div>
                    </div>
                </article>
            </footer>
        </>
    )
};

export default Footer;