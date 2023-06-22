import Nav from '@component/Nav'
import Provider from '@component/Provider'
import '@styles/globals.css'

export const metadata={
    title:'Next.js 13',
    description:'Discover & Share AI Prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
          <div className='main'>
                <div className='gradient'/>
                 
            </div>
            <main className='app'>
              <Nav></Nav>
            {children}
            </main>
          </Provider> 
        </body>
    </html>
  )
}

export default RootLayout
