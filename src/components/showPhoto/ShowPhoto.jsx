import './style.scss'; // Importing SCSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from FontAwesome
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Importing close icon from FontAwesome's free solid icons
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ShowPhoto = ({ isOpen, closeModal, imageUrl, changeValue }) => {

    const [fileURL, setFileURL] = useState(URL.createObjectURL(imageUrl));

    // Hook to dispatch actions to Redux store
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image') {
                // Create a URL for the file to preview
                const url = URL.createObjectURL(file);
                setFileURL(url);
                dispatch(changeValue(file));
            } else {
                setFileURL(null);
            }
        } else {
            setFileURL(null);
        }
    };


    return (
        <>
            <div className={isOpen ? "showPhoto" : "showPhoto hide"}>
                <div className="closeModel" onClick={() => closeModal(true)}></div>
                <div className="box_details">
                    <div className="top">
                        <h4>your photo</h4>
                        <div className="close">
                            <button type='button' onClick={() => closeModal(true)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={fileURL} alt="" />
                        </div>
                        <input
                            id='inputPhotoReplace'
                            style={{ display: "none" }}
                            type="file"
                            onChange={handleFileChange}
                        />
                        <button type='button' onClick={() => document.getElementById("inputPhotoReplace").click()}>Replace photo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowPhoto