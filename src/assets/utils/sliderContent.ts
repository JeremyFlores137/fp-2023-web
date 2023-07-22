import camera from '../img/camera.png';
import camera2 from '../img/camera2.jpg';
import camera3 from '../img/camera3.png';
export const sliderContent = [
  {
    title: '¿En qué consiste el proyecto?',
    text: 'El proyecto consiste en el desarrollo de un sistema web para controlar un brazo robótico conectado a una cámara. El objetivo principal de este proyecto es mejorar la eficiencia y la efectividad en la detección temprana de objetos obstructores en la visualización facial en entornos de seguridad críticos. El robot, con su cámara y modelo entrenado, se despliega estratégicamente para realizar un monitoreo activo y continuo de las áreas objetivo. A través de una interfaz web intuitiva, los operadores pueden controlar el robot de forma remota, moviéndolo y ajustando su posición para obtener vistas óptimas y exhaustivas. La cámara del robot captura imágenes en tiempo real, que son procesadas por el modelo entrenado de detección de objetos obstructores.',
    img: camera.src,
    alt: 'camera',
  },
  {
    title: '¿Por qué la razón del proyecto?',
    text: 'Viendo la coyuntura de la ciudad de Lima, Perú, o cualquier otro lugar donde los asaltos ocurren recurrentemente, en busca mejorar la seguridad y la capacidad de respuesta ante situaciones de robo en establecimientos. Este proyecto ayudará automatizando la llamada a la policía o la notificación inmediata al dueño del establecimiento, a través de un sistema de videovigilancia basado en un robot acoplado a una cámara con capacidades avanzadas de detección de rostros cubiertos, tales como gorros, lentes o mascarillas.',
    img: camera2.src,
    alt: 'camera',
  },
  {
    title: '¿Qué se busca resolver?',
    text: 'La combinación del robot de cinco grados de libertad, la cámara con el modelo de detección y la integración del control web y las notificaciones VoIP, brinda una solución integral para la vigilancia proactiva y la detección temprana de objetos obstructores en entornos críticos. Este enfoque permite una respuesta rápida y eficiente, mejorando significativamente la seguridad y la eficacia de la vigilancia en situaciones que requieren una atención especial.',
    img: camera3.src,
    alt: 'camera',
  },
];
