function MiniBook({object}){
    return(
        <div className="prevBook">
            {/* 12 hours so far */}
            {/* We only want: */}
            {/* - Title */}
            {/* - Image (Likely will have to be scaled down heavily) */}
            {/* - preferably a link to the google books site */}
            <p>{object.title}</p>
            <a href={object.canonicalVolumeLink}><img src={object.image}></img></a>
        </div>
    )
}

export default MiniBook
