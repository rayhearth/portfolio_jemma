import React from 'react';
import ImageId from '../assets/img/photo-id-orange.png'

const About = () => {
    return (
        <section className='about'>

            <div className="text">
                <h1>A propos</h1>
                <p>
                    Hello, Je suis Emmanuelle Jupon, je suis graphiste et développeuse web front-end.
                </p>
                <p>
                    J'ai suivi une prépa aux arts appliqués puis un BTS communication visuelle durant 3 ans avant de me lancer dans la vie active. Durant plusieurs années, j’ai occupé des postes de rédacteurs administratifs dans des secteurs totalement variés de l’édition à l’industrie en passant par l’architecture et l’ingenierie. Dans tous les postes que j’ai occupé, j’ai toujours fait appel à mes connaissances et à ma culture graphique, je suis une passionnée d’informatique. C’est pourquoi j’ai décidé de reprendre mes études et me former au métier de webdesigner et développeur afin d’acquérir les compétences nécessaires dans la création de site web UI/UX.
                </p>
                <p>
                    Aujourd’hui, je suis plus que jamais passionnée par mon métier, je conçois et réalise des sites web du cahier des charges à la mise en ligne, en passant par la conception graphique, la prise de vue photographique et le responsive.Si mon travail vous plaît, n’hésitez pas à embarquer avec moi pour révéler votre projet...
                </p>

            </div>
            <div className="portrait">
                <img src={ImageId} alt="" />
            </div>


        </section>
    );
};

export default About;