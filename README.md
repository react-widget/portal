# react-widget-portal

## Install

```
npm install --save react-widget-portal
```

## Usage

[![Edit react-widget-portal](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-widget-portal-p7o6oooqv7?fontsize=14&hidenavigation=1&theme=dark)

```
import Portal from 'react-widget-portal';

<Portal container={document.body}>
    <div>Hello Portal</div>
</Portal>


```

## Interface

```ts
interface PortalProps {
    /** 渲染容器，默认为：document.body */
    container?: HTMLElement | Promise<HTMLElement | null> | null;
    /** 初始渲染时触发，注：如果container为null时不会触发，直到container存在 */
    onChildrenMount?: () => void;
}
```
