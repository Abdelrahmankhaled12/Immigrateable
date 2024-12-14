import { useEffect, useState } from 'react';
import './style.scss';
import { ShowPhoto } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotograph } from '../../../../store/personalDetails';
import icon from '../../../../assets/tick.png';

const Photograph = () => {
    // State to manage modal visibility, file details, and error messages
    const [isOpen, setIsOpen] = useState(false);
    const [fileName, setFileName] = useState("No file chosen");
    const [fileURL, setFileURL] = useState(null);
    const [error, setError] = useState("");

    // Access primary applicant details from Redux store
    const { primaryApplicant } = useSelector(state => state.personalDetails);

    // Hook to dispatch actions to Redux store
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image') {
                setFileName("File uploaded");
                setError("");
                // Create a URL for the file to preview
                const url = URL.createObjectURL(file);
                setFileURL(url);
                dispatch(setPhotograph(file));
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
        if (primaryApplicant.photograph !== "") {
            const fileType = primaryApplicant.photograph;
            setFileName("File uploaded");
            setError("");
            const url = URL.createObjectURL(fileType);
            setFileURL(url);
        }
    }, [primaryApplicant])

    return (
        <>
            <div className="photograph">
                <div className="box">
                    <div className="title">
                        <h2>Photograph</h2>
                        <p>We'll review your photo to ensure it meets all the necessary criteria for the DV lottery submission.</p>
                    </div>
                    <div className="input">
                        <label htmlFor="inputPhoto">Upload your photograph <span>*</span></label>
                        <div
                            className={fileURL ? "inputPhotograth active" : "inputPhotograth"}
                            onClick={() => {
                                if (!fileURL) {
                                    document.getElementById("inputPhoto").click();
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
                            id='inputPhoto'
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
                <ShowPhoto
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    imageUrl={primaryApplicant.photograph}
                    changeValue={setPhotograph}
                    index={null}
                />
            )}
        </>
    );
};

export default Photograph;
