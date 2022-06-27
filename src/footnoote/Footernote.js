import React, {Fragment} from 'react'
import parse from "html-react-parser";
import StringToReact from 'string-to-react'
import {
  FootnotesProvider,
  FootnoteRef as Ref,
  Footnotes,
} from './usefootnote'
import './styles.css'

export default function App() {



  const htmlString = "<h1><Ref description=\"Magic may or may not be happening\"> hello magic</Ref></h1>"
  // var parts = htmlString.split(/\{\{|\}\}/g); 


  // const thisisString = <Fragment>'<p> Hello world </p>'</Fragment>;
  return (
    <article>
      <FootnotesProvider>
        <div>{StringToReact(htmlString)}</div>
        {/* <h1>{parse(htmlString)}</h1> */}
        {/* <div dangerouslySetInnerHTML={{ __html: parts }} /> */}
        
        <p>
          Start editing to see some{' '}
          <Ref description="Magic may or may not be happening"> hello magic</Ref>{' '}
          happen!
          <Ref description='Sahih bukhari'>1</Ref>
        </p>
        <p>
          Start editing to see some{' '}
          <Ref  description="Magic t be happening">hello</Ref>{' '}
          happen!
        </p>
        


        <p>
          Maintaining{' '}
          <Ref description="Footnotes are notes placed at the bottom of a page. They cite references or comment on a designated part of the text above it.">
            <strong>footnotes</strong>
          </Ref>{' '}
          manually can be a pain. By using{' '}
          <Ref description="Cascading Style Sheets">CSS</Ref>{' '}
          <Ref
            id="hello2"
            description={
              <>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS counters
                </a>{' '}
                are, in essence, variables maintained by CSS whose values may be
                incremented by CSS rules to track how many times they’re used.
              </>
            }
          >
            counters খান খান
          </Ref>{' '}
          to add the numbered references in the text and an ordered list to
          display the actual footnotes in the footer, it becomes extremely easy.
        </p>

        <Footnotes label="Footnotes" backLabel="Back to content" />
      </FootnotesProvider>
    </article>
  )
}
