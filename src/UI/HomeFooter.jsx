
import facebook from '../../public/images/facebook@3x.png'
import instagram from '../../public/images/instagram@3x.png'
import group2 from '../../public/images/Group_2@3x.png'

export const HomeFooter = () => {
    return (
        <footer className="homeFooter">
            <div className='info'>
                <div className="logos">
                    <img className="instagram" src={instagram} alt="Instagram Logo" />
                    <img className="facebook" src={facebook} alt="Facebook Logo" />
                </div>
                <span>
                    © DEV. All Rights Reserved.
                    <a href="#">Privacy Policy</a>
                    ,
                    <a href="#">Terms & Conditions</a>
                </span>
            </div>
            <img className="tennisBall" src={group2} alt="tennis ball" />
        </footer>
    )
}
