import React from 'react'
import classNames from 'clsx'
import Menu from '@/components/Menu'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import fonts from '@/styles/fonts'
import Loader from '@/components/Loader'


const Layout = (props) => {
  const { children } = props
  const [theme, setTheme] = React.useState({})

  return (
    <div
      className={classNames(
        'dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8',
        theme,
        ...fonts
      )}
    >   

      
      <ThemeSwitcher setTheme={setTheme} />
	{/* <div className="fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
	    <div className="fixed top-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>*/}
	<div className="ellipsel-bg">
	    <div className="Ellipsel1"></div>
	    <div className="Ellipsel2"></div>
	    
      <div className="relative w-full max-w-screen-xl">
        <main className="relative h-full bg-gradient-to-tr from-omega-900 via-omega-900 to-omega-800">

          <div className="flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8">
                <div className="prose dark:prose-invert hidden">
              <Loader text="Loading" />
            </div>
            {children}
          </div>
        </main>
      </div>
	    </div>
      <Menu />
    </div>
  )
}

export default Layout
