import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Modal from '../modal/Modal';
import { useState } from 'react';

const Lessons = () => {
    const vocabData = useLoaderData();
    const { lesson_no } = useParams();
    const navigate = useNavigate();
    const [modalData, setModalData] = useState(null);
    const lessonVocabData = vocabData.filter(item => item.Lesson_no.toString() === lesson_no);
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    }
    const handleOpenModal = (data) => {
        setModalData(data);
        document.getElementById('my_modal_5').showModal();
    };

    return (
        <div className="container mx-auto px-4 py-4">
            <h1 className="text-3xl text-blue-900 font-bold mb-6 text-center">Lesson {lesson_no}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessonVocabData.map((item) => (
                    <div onClick={() => pronounceWord(item.word)} key={item.Id} className={`vocab-card p-4 rounded-lg shadow-md ${item.difficulty === 'easy'
                        ? 'bg-green-100'
                        : item.difficulty === 'medium'
                            ? 'bg-yellow-100'
                            : 'bg-red-100'
                        }`}>
                        <p className="font-semibold text-xl">{item.word}</p>
                        <p><strong>Meaning:</strong> {item.meaning}</p>
                        <p><strong>Pronunciation:</strong> {item.pronunciation}</p>
                        <p><strong>Part of Speech:</strong> {item.part_of_speech}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-teal-600"
                            onClick={() => handleOpenModal({
                                word: item.word,
                                meaning: item.meaning,
                                when_to_say: item.when_to_say,
                                example: item.example
                            })}
                        >
                            When to say
                        </button>
                    </div>
                ))}
            </div>
            <Modal modalData={modalData}> </Modal>
            <button
                className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-teal-600"
                onClick={() => navigate('/startlearning')}
            >
                Back to Lesson
            </button>
        </div>
    );
};

export default Lessons;
