const Button = ({ showButton = true, buttonText = '', onClick = () => {} }) => {
    return (
      <button
        className={`flex items-center justify-center font-inter font-medium text-base text-white bg-blue-600 rounded-full px-5 py-2 mt-8 transition-all duration-300 ${
          showButton ? 'opacity-100' : 'opacity-0'
        } hover:shadow-2xl hover:scale-105`}
        onClick={onClick}
      >
        {buttonText} &rarr;
      </button>
    );
  };

  export default Button;
