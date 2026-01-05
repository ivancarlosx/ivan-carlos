import './App.css'

export function App() {
  const text = "Ivan Carlos is a designer engineer and motion design. He works with studios, brand and individuals worldwide to build remarkable yet performant digital experiencies across the fields of art, culture and commerce."
  
  const firstPartEnd = text.indexOf('.')
  const firstPart = text.substring(0, firstPartEnd + 1)
  const secondPart = text.substring(firstPartEnd + 2)
  const firstPartWords = firstPart.split(' ')
  const secondPartWords = secondPart.split(' ')

  return (
    <>
    <div className='wrapper_page'>
      <img className='img-bg' src="/img_bg.png" alt="imagem de fundo" />
      <div className='container'>
        <p>
          {firstPartWords.map((word, index) => (
            <span key={index} className="word" style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
              {word}{index < firstPartWords.length - 1 ? ' ' : ''}
            </span>
          ))}
          {' '}
          <span className='span_white'>
            {secondPartWords.map((word, index) => (
              <span key={index} className="word" style={{ animationDelay: `${0.5 + (firstPartWords.length + index) * 0.05}s` }}>
                {word}{index < secondPartWords.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        </p>
        <div className="wrapper_button">
          <button className='button button-animate' onClick={() => window.open('mailto:ivanjr.icj@gmail.com', '_blank')}>Get in touch</button>
          <button className='button_secondary button-animate' onClick={() => window.open('https://www.linkedin.com/in/ivancarlosx/', '_blank')}>Linkedin</button>
        </div>
      </div>
    </div>
    </>
  )
}

