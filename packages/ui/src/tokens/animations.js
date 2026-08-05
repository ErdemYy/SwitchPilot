"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animations = void 0;
/**
 * SwitchPilot Design System - Animation Tokens & Timing Rules
 */
exports.animations = {
    duration: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
    },
    easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    transitions: {
        default: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
};
