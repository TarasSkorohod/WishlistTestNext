const Footer = () =>{
    const handleLeftButtonClick = () => {
        // Обробник для лівої кнопки
    };

    const handleRightButton1Click = () => {
        // Обробник для першої правої кнопки
    };

    const handleRightButton2Click = () => {
        // Обробник для другої правої кнопки
    };

    return(
        <div className="container">
            <button onClick={handleLeftButtonClick} style={{ position: 'absolute', left: '0' }}>
             0
            </button>
            <button onClick={handleRightButton1Click} style={{ position: 'absolute', right: '0' }}>
               1
            </button>
            <button onClick={handleRightButton2Click} style={{ position: 'absolute', right: '100px' }}>
                2
            </button>
        </div>
    );
}
export default Footer