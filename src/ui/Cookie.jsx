import styled from 'styled-components'
import CookieBtn from './CookieBtn'

const CookieModal = styled.div`
    position: fixed;
    z-index: 50;
    width: 100%;
    bottom: 0;
    background-color: red;
    animation: slide 1s linear;

    @keyframes slide {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0);
        }
    }
`

function Cookie() {
    return (
        <CookieModal>
            <div className="container mx-auto flex-col flex items-center justify-between gap-4  p-4 text-sm lg:justify-evenly lg:flex-row xl:p-6 xl:text-base w-full">
                <div className="space-y-2">
                    <p>
                        Na stronie wykorzystujemy pliki cookies, aby zbierać
                        dane dotyczące ruchu na stronie.
                    </p>
                    <p>
                        Więcej informacji znajdziesz w{' '}
                        <a
                            href="/privacy-polity"
                            className="text-yellow-500 transition-colors duration-300 hover:text-yellow-400 focus:text-myorder focus:outline-none"
                        >
                            polityce prywatności
                        </a>
                        .
                    </p>
                </div>
                <CookieBtn />
            </div>
        </CookieModal>
    )
}

export default Cookie
