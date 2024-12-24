import { View } from '@nativescript/core';

export class AnimationService {
  static fadeIn(view: View, duration: number = 300) {
    return view.animate({
      opacity: 1,
      duration
    });
  }

  static slideIn(view: View, duration: number = 300) {
    return view.animate({
      translate: { x: 0, y: 0 },
      duration,
      curve: 'easeOut'
    });
  }

  static pulse(view: View) {
    return view.animate({
      scale: { x: 1.1, y: 1.1 },
      duration: 100
    }).then(() => {
      return view.animate({
        scale: { x: 1, y: 1 },
        duration: 100
      });
    });
  }
}