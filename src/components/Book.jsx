
function book(json,handleEbook,handleCate,handleCoun,handleLang){

    return(
        <>
            {/* {/* I need a few things:} */}
            {/* 1.) Div for title and author */}
            {/* 2.) divs for attributes */}
            {/* 3.) Image */}

            <div className="bookTitle">
                <h3>{json.title}</h3>
                <p>{json.author}</p>
            </div>

            <div className="bookAttributes">
                {/* isEbook,category,country,language */}
                <button onClick={handleEbook}>
                    <span>
                        {json.isEbook ? "Ebook" : "Physical Book"}
                    </span>
                </button>

                <button onClick={handleCate}>
                    <span>
                        {json.category}
                    </span>
                </button>

                <button onClick={handleCoun}>
                    <span>
                        {json.country}
                    </span>
                </button>

                <button onClick={handleLang}>
                    <span>
                        Language: {json.language}
                    </span>
                </button>
            </div>

            <div className="bookImgDiv">

            </div>
        </>
    )
}

export default Book