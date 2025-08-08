import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  children?: React.ReactNode;
}

export default function CtaButton({children, link}: Props){
  return (
    <StyledWrapper>
      <Link to={link}>
        <button className="text-sm font-semibold cursor-pointer">
        {children?.toString().toUpperCase()}
          <div id="clip">
            <div id="leftTop" className="corner" />
            <div id="rightBottom" className="corner" />
            <div id="rightTop" className="corner" />
            <div id="leftBottom" className="corner" />
          </div>
          <span id="rightArrow" className="arrow" />
          <span id="leftArrow" className="arrow" />
        </button>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    width: 11em;
    height: 4em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    color: #ddebf0;
  }

  #clip {
    --color: #e6272f;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double #e6272f;
    box-shadow: inset 0px 0px 15px #e6272f;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #e6272f;
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  #rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
  }

  button:hover #rightArrow {
    background-color: #e6272f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  button:hover #leftArrow {
    background-color: #e6272f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: #e6272f;
    box-shadow: inset 1px 1px 8px #e6272f;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
  }

  #rightTop {
    top: -1.98em;
    left: 91%;
  }

  #leftTop {
    top: -1.96em;
    left: -3.0em;
  }

  #leftBottom {
    top: 2.10em;
    left: -2.15em;
  }

  #rightBottom {
    top: 45%;
    left: 88%;
  }

  button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  button:hover #clip {
    animation: 0.2s ease-in-out both greenLight8;
    --color: #e6272f;
  }

  @keyframes changeColor8 {
    from {
      background-color: #e6272f;
    }

    to {
      background-color: #e6272f;
    }
  }

  @keyframes lightEffect8 {
    from {
      box-shadow: 1px 1px 5px #e6272f;
    }

    to {
      box-shadow: 0 0 2px #e6272f;
    }
  }

  @keyframes greenLight8 {
    from {
    }

    to {
      box-shadow: inset 0px 0px 32px #e6272f;
    }
  }

  @keyframes leftArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(10px);
    }
  }

  @keyframes rightArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(-10px);
    }
  }`;

