import CountUp from 'react-countup';

const Counter = ({ start, end, duration }) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      useEasing={true}
      easingFn={(t, b, c, d) => {
        // Optional: custom easing function if you want even more control
        return c * (1 - Math.pow(2, (-10 * t) / d)) + b;
      }}
    />
  );
};

export default Counter;
