import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Spinner } from '../../Components'
import sass from './style.module.sass'


const Modal = ({
    title,
    blur,
    width,
    buttons,
    btnAlign,
    closeBtn,
    loading,
    children
}) => {
    return (
        <>
            <div className={sass.blur} style={ {background: !blur && 'none'}}>
                <div className={sass.modal} style={{ width }}> 
                    <header className={sass.modal_header}>
                        <h2 className={sass.modal_title}>{ title }</h2>
                        <button 
                            className={sass.modal_close}
                            onClick={closeBtn.action}
                            style={{ 
                                right:  closeBtn 
                                    && closeBtn.position 
                                    && closeBtn.position !== 'left' && 0   
                            }}
                            >
                                { 
                                    (closeBtn && closeBtn.icon && closeBtn.icon) || 
                                    (closeBtn && closeBtn.topBtnText && closeBtn.topBtnText) ||
                                    'X'
                                }
                        </button>
                    </header>
                    <div className={sass.modal_body}>
                        {loading && <Spinner />}
                        {
                            children || <p style={{
                                textAlign: 'center', 
                                fontSize: '14px'}
                            }>Some modal content</p>
                        }
                    </div>
                    { 
                        ((closeBtn && closeBtn.closeByBtn) || buttons.length) ? (
                            <footer className={sass.modal_footer} style={{justifyContent: btnAlign && btnAlign === 'left' ? 'flex-start' : 'flex-end' }}> 
                                {
                                    buttons && buttons.map( (btn, idx) => {
                                        return (
                                            <button 
                                                key={idx}
                                                className={sass.modal_btn}
                                                onClick={btn[1]}
                                            >
                                                {btn[0]}  
                                            </button>
                                        )
                                    })
                                }
                                {   closeBtn && closeBtn.closeByBtn && (
                                        <button 
                                            className={classNames(sass.modal_btn, sass.modal_cancel)}
                                            onClick={closeBtn.action}
                                            >
                                                {(closeBtn && closeBtn.btnText && closeBtn.btnText) || 'Cancel'}
                                        </button>
                                    )
                                }
                            </footer>
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    blur: PropTypes.bool,
    width: PropTypes.number,
    buttons: PropTypes.array,
    btnAlign: PropTypes.oneOf(['left', 'right']),
    closeBtn: PropTypes.object,
    // closeBtn: {
    //     position: PropTypes.oneOf(['left', 'right']),
    //     closeByBtn: PropTypes.bool,
    //     btnText: PropTypes.string,
    //     topBtnText: PropTypes.string,
    //     icon: PropTypes.string,
    //     action: PropTypes.func
    // },
    loading: PropTypes.bool,
}

Modal.defaultProps = {

}


export default Modal
