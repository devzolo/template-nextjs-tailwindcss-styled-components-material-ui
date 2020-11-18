import styled from 'styled-components';
import tw from 'twin.macro';

export const ContainerWrapper = styled.div`
  background-color: #9921e8;
  background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
  font-family: Lato, sans-serif;

  ${tw`min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0`}

  header {
    ${tw`max-w-lg mx-auto`}
    a {
      h1 {
        ${tw`text-4xl font-bold text-white text-center`}
      }
    }
  }
  main {
    ${tw`bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl`}
    section {
      h3 {
        ${tw`font-bold text-2xl`}
      }
      p {
        ${tw`text-gray-600 pt-2`}
      }
    }

    section {
      ${tw`mt-10`}
      form {
        ${tw`flex flex-col`}

        #text-field-div {
          ${tw`mb-6 pt-3 rounded bg-gray-200`}
          label {
            ${tw`block text-gray-700 text-sm font-bold mb-2 ml-3`}
          }
          input {
            ${tw`bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3`}
          }
        }

        #forgot-div {
          ${tw`flex justify-end`}
          a {
            ${tw`text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6`}
          }
        }

        button {
          ${tw`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200`}
        }
      }
    }
  }

  #register-div {
    ${tw`max-w-lg mx-auto text-center mt-12 mb-6`}
    p {
      ${tw`text-white`}
      a {
        ${tw`font-bold hover:underline`}
      }
    }
  }

  footer {
    ${tw`max-w-lg mx-auto flex justify-center text-white`}
    a {
      ${tw`hover:underline`}
    }
    span {
      ${tw`mx-3`}
    }
  }
`;
