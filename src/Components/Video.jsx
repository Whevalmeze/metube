
export const Video = ({title ="Sample", imgSrc ="https://i.ytimg.com/vi/5DHvgZ8102g/sddefault.jpg", date="2023"}) => {
    return (
    <div>
        <img src={imgSrc} alt="" />
        <h2>{title}</h2>
        <span>{date}</span>
    </div>
    )
}   