
export const Video = ({title ="Sample", imgSrc ="https://i.ytimg.com/vi/5DHvgZ8102g/sddefault.jpg", date="2023"}) => {
    return (
    <div style={{minWidth: "200px", }}>
        <img src={imgSrc} style={{width: "320px", height: "200px"}}  alt="" />
        <h2 style={{margin: 0}}>{title}</h2>
        <span>{date}</span>
    </div>
    )
}   