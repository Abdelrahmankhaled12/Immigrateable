import { useEffect, useState } from 'react';
import './style.scss';
import { ShowPhoto } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotograph } from '../../../../store/personalDetails';
import icon from '../../../../assets/tick.png';
import { setPhotographFamily } from '../../../../store/family';
import ShowPhotoMember from './ShowPhotoMember';

const PhotographMemer = ({ index }) => {

    const { family } = useSelector(state => state.family);
    const [image, setImage] = useState("")

    // State to manage modal visibility, file details, and error messages
    const [isOpen, setIsOpen] = useState(false);
    const [fileName, setFileName] = useState("No file chosen");
    const [fileURL, setFileURL] = useState(null);
    const [error, setError] = useState("");

    // Hook to dispatch actions to Redux store
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image') {
                setImage(file)
                setFileName("File uploaded");
                setError("");
                // Create a URL for the file to preview
                const url = URL.createObjectURL(file);
                setFileURL(url);
                dispatch(setPhotographFamily({
                    item: file,
                    index: index
                }));
            } else {
                // Handle invalid file type
                setFileName("No file chosen");
                setFileURL(null);
                setError("* Invalid file. Please, provide a different photo.");
            }
        } else {
            // Handle no file selected
            setFileName("No file chosen");
            setFileURL(null);
            setError("");
        }
    };

    useEffect(() => {
        if (family[index].photograph !== "") {
            const fileType = family[index].photograph;
            setImage(fileType.item)
            setFileName("File uploaded");
            setError("");
            const url = URL.createObjectURL(fileType.item);
            setFileURL(url);
        }
    }, [family])

    return (
        <>
            <div className="photograph">
                <div className="title">
                    <h2>Photograph</h2>
                    <p>We'll review your photo to ensure it meets all the necessary criteria for the DV lottery submission.</p>
                </div>
                <div className="fields">
                    <div className="input">
                        <label htmlFor={`inputPhoto_${index}`}>Upload your photograph <span>*</span></label>
                        <div
                            className={fileURL ? "inputPhotograth active" : "inputPhotograth"}
                            onClick={() => {
                                if (!fileURL) {
                                    document.getElementById(`inputPhoto_${index}`).click();
                                } else {
                                    setIsOpen(true);
                                }
                            }}
                        >
                            <img
                                src={icon}
                                alt="Uploaded"
                                style={{ display: fileURL ? "block" : "none" }}
                            />
                            <button
                                type="button"
                                style={{ display: !fileURL ? "block" : "none" }}
                            >
                                Choose File
                            </button>
                            <p>{fileName}</p>
                            <button
                                style={{ display: fileURL ? "block" : "none" }}
                                type='button'
                            >
                                Preview
                            </button>
                        </div>
                        <input
                            id={`inputPhoto_${index}`}
                            style={{ display: "none" }}
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </div>
            {fileURL && (
                <ShowPhotoMember
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    image={family[index].photograph}
                    key={index}
                />
            )}
        </>
    );
};

export default PhotographMemer;
