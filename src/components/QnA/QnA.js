import React from 'react';

const QnA = () => {
    return (
        <div>
            <h1 className='text-6xl text-center text-indigo-900 font-semibold mt-12'>FREQUENTLY ASKED QUESTION</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16'>
                <div className=' border-2 border-teal-500 mt-5 mx-2 p-4 rounded-2xl'>
                    <h2 className=' text-4xl text-center text-indigo-800 mb-2 font-medium'>What is context API?</h2>
                    <p className=' text-lg text-teal-700 font-medium'>
                        The context api, being a react Structure, enables us to exchange resources in solving prop drilling from all levels of application.  It is a way to produce global variables by react app that can be passed around. It can replace the prop drilling method from parent to child which is easier as well. React.createContext() returns a consumer and a Provider. Provider components suggest a name that provides the state to its child. Consumer component consumes and utilises the state.
                    </p>
                </div>
                <div className=' border-2 border-teal-500 mt-5 mx-2 p-4 rounded-2xl'>
                    <h2 className=' text-4xl text-center text-indigo-800 mb-2 font-medium'>What are Semantic Tags?</h2>
                    <p className=' text-lg text-teal-700 font-medium'>
                        The HTML elements that clearly describe their meaning in a human and machine readable way are called semantic tags. Such as 'header' , 'footer' and 'article' all are self describing that they serve in HTML sheets. If we use 'div', 'table' etc instead of semantic tags then we can not understand by only looking for what purpose  they are being used in the markup language. The main advantage is semantic tags are much easier to read and it has greater accessibility.

                    </p>
                </div>
                <div className=' border-2 border-teal-500 mt-5 mx-2 p-4 rounded-2xl'>
                    <h2 className=' text-4xl text-center text-indigo-800 mb-2 font-medium'>What are differences between Inline , Block and Inline-Block Elements?</h2>
                    <p className=' text-lg text-teal-700 font-medium'>
                        <b>Block-level elements</b> always start on a new line and some spaces before and after are added automatically by the browser. It consumes the full width available. Some block-level elements are  'div', 'p', 'h1-6'  etc. <br />

                        <b>Inline elements</b> do not start on a new line and any width and height property will have no effect. It consumes as much width as necessary. Some Inline elements are 'span', 'b', 'input' etc.<br />

                        <b>Inline-Block elements</b> displays as an inline-level block container and  width and height property can be set.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default QnA;