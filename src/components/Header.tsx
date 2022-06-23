import "../styles/header.css";

function Header() {
    let logged = 'My Account';
    
  return (
     <header>
        <div className="block info">
            <div className="info_content">
                <ul className="info_left">
                    <li><svg id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2  l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8  c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2  c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4  c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9  C442.3,370.8,431.5,351.6,415.9,335.5z"/></svg>
                        Number
                        </li>
                    <li><svg viewBox="0 0 512 512" style={{height: '17px'}}xmlns="http://www.w3.org/2000/svg"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/></svg>
                        email@enterprise.com
                        </li>
                    <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"> <g><path d="M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z    M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8   C312.4,216.8,287.2,242.2,256,242.2z"/></g></svg>
                        Av Somewhere, 117
                        </li>
                </ul>
                <ul className="info_right">
                    <li id="last"><svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><g><ellipse cx="12" cy="8" rx="5" ry="6"/><path  d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"/></g></g></svg>
                       {logged}
                    </li>
                </ul>
            </div>
        </div>
        <div className="block search">
            <div className="info_content">
                <div className="logo_content">
                 {/*    <img src="./src/assets/default.png" alt="default"></img> */}
                </div>
                <div className="search_content">

                </div>
                <div className="">

                </div>
            </div>
        </div>
        <nav className="block nav">
            <ul className="info_content">
                <li>Inicio</li>
                <li>Professores</li>
                <li>Instituições</li>
                <li>Sobre</li>
            </ul>
        </nav>
     </header>
  )
}

export default Header
