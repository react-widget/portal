# react-widget-portal

`npm install --save react-widget-portal`

```
import Portal from 'react-widget-portal';

<Portal container={document.body}>
    <div>Hello Portal</div>
</Portal>


```

## Interface

```
interface PortalProps {
    container?: HTMLElement | Promise<HTMLElement | null> | null;
}
```
