import { useRef, useEffect, MutableRefObject, memo } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface Props {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  controller?: MutableRefObject<AnimationItem | null>;
  className?: string;
}

const Lottie = memo(
  ({ src, loop = true, autoplay = true, controller, className }: Props) => {
    const container = useRef<HTMLDivElement | null>(null);
    const player = useRef<AnimationItem | null>(null);
    const [, assetsPath, name] = /(.+)\/(.+)\..+/.exec(src)!;

    useEffect(() => {
      if (container.current == null) {
        return;
      }

      player.current = lottie.loadAnimation({
        container: container.current,
        loop,
        autoplay,
        renderer: 'svg',
        path: src,
        assetsPath,
        name,
        rendererSettings: {
          progressiveLoad: true,
          hideOnTransparent: true,
        },
      });

      if (controller !== undefined && controller.current == null) {
        controller.current = player.current;
      }

      return () => {
        player.current?.destroy();
      };
    }, [assetsPath, autoplay, controller, loop, name, src]);

    return <div className={className} ref={container} />;
  },
  (prev, next) => {
    return (
      prev.src === next.src &&
      prev.loop === next.loop &&
      prev.autoplay === next.autoplay
    );
  },
);

export default Lottie;

Lottie.displayName = 'Lottie';
