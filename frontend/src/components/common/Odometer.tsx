// 외부모듈
import { useSpring, animated } from "@react-spring/web";

type OdometerProps = {
  digits: number;

  children?: React.ReactNode;
};
const Odometer = ({ digits, children }: OdometerProps) => {
  const spring = useSpring({
    digits,
  });

  return (
    <div>
      <animated.div>
        {spring.digits.to((x) => new Intl.NumberFormat().format(Math.round(x)))}
      </animated.div>
      {children}
    </div>
  );
};

export default Odometer;
