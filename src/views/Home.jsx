import { useState, useEffect } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import servicesImg from '@assets/react.svg';

const Home = () => {
    const [habitats,setHabitats] = useState([]);

    const getHabitatsFromAPI = () => {
        let habitats = [];
        let objHabitat = {
            id : "1",
            name: "savane",
            description: "Faune sauvage de la savane africaine",
            comment : "",
            imageList : []
        };
        habitats.push(objHabitat);
        objHabitat = {
            id : "2",
            name: "marais",
            description: "Les marais lien de légende",
            comment : "a nettoyer",
            imageList : []
        };
        habitats.push(objHabitat);
        setHabitats(habitats);
      };
    useEffect(() => {
        getHabitatsFromAPI();
    },[]);
    return (
        <>
        <header>
            <Header />
            <h1>Welcome page</h1>
        </header>
        <main className="container-fluid">
            <section className="row home-section-images">
                <div id="carouselExample" className="carousel slide home-carousel" data-bs-ride="carousel" data-bs-touch="false">
                    <div className="carousel-inner home-carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1583499871880-de841d1ace2a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block home-carousel-img" alt="Des lions"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1629074401744-5843df08d5af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpc2l0b3IlMjBwYXJjfGVufDB8fDB8fHww" className="d-block home-carousel-img" alt="Des visiteurs"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1613109303734-9a4aa209cd35?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block home-carousel-img" alt="Des giraffes"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row home-section-presentation">
                
            </section>
            <section className="row home-section-action">
                <article className="col-auto">
                    <div className="card home-card">
                        <img src={servicesImg} className="card-img-top" alt="Nos services"/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </article>
                <article className="col-auto">
                    <div className="card home-card">
                        <img src={servicesImg} className="card-img-top" alt="Nos activités"/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </article>
            </section>
            
            {habitats.map((habitat) => {
                return(
                    <p key={habitat.id}>{habitat.name}</p>
                );
            } )}
        </main>
            
        <Footer />
          
        </>
    );
}

export default Home;