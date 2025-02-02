import logoSm from "~/assets/images/logo-sm.png"

const InfoToast = ({ message }: { message: string }) => {
    return (
        <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3" id="toastPlacement" style={{
            zIndex: 1000


        }}>
            <div className="toast show">
                <div className="toast-body d-flex align-items-center gap-2">
                     <span className="mdi mdi-information-variant-circle-outline medium-icon text-primary"></span> { message }
                </div>
            </div>
        </div>

    )
}

export default InfoToast