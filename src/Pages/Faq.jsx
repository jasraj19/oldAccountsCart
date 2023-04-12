import React from 'react';    
import FaqUpperSec from "./FaqUpperSec";
// import "./Faq.css";
import Accordion from './Accordion';
import Footer from "../Components/Footer";
const Faq = () => {

    const accordion = [
        {
            question: 'Contrary to popular belief Lorem Ipsum is not simply?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem aliquid provident modi autem quisquam iusto ipsa rerum iste! Dolorem voluptates, recusandae repellendus maiores quod aut sequi dolorum consequatur incidunt.'
        },
        {
            question: 'Contrary to popular belief Lorem Ipsum is not simply?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem aliquid provident modi autem quisquam iusto ipsa rerum iste! Dolorem voluptates, recusandae repellendus maiores quod aut sequi dolorum consequatur incidunt.'
        },
        {
            question: 'Contrary to popular belief Lorem Ipsum is not simply?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem aliquid provident modi autem quisquam iusto ipsa rerum iste! Dolorem voluptates, recusandae repellendus maiores quod aut sequi dolorum consequatur incidunt.'
        },
        {
            question: 'Contrary to popular belief Lorem Ipsum is not simply?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem aliquid provident modi autem quisquam iusto ipsa rerum iste! Dolorem voluptates, recusandae repellendus maiores quod aut sequi dolorum consequatur incidunt.'
        },
        {
            question: 'Contrary to popular belief Lorem Ipsum is not simply?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem aliquid provident modi autem quisquam iusto ipsa rerum iste! Dolorem voluptates, recusandae repellendus maiores quod aut sequi dolorum consequatur incidunt.'
        }
    ]                                   

  return (
    <>
      <section className="Faq">
        <FaqUpperSec />
        <div className="faqBody">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-3">
                <div className="faqImg">
                    <img src="Images\continue-diet-order-pizza-portrait-questioned-thinking-attractive-woman-with-blond-hair-curls-touching-lip-looking-up-with-thoughtful-focused-expression-having-idea-gray-wall.png" alt="" />
                </div>
              </div>
              <div className="col-md-9 col-sm-12 text-center">
                <div className="faqTitle">Frequently Asked Questions</div>

                <div className="accordion">
                    {accordion.map(({ question, answer }) => (
                    <Accordion question={question} answer={answer} />
                    ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </section>
    </>
  );
}

export default Faq;
