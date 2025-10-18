
function Book({json}){

    return(
        <div className="bookDiv">
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
                <button >
                    <span>
                        {json.isEbook ? "Ebook" : "No Ebook"}
                    </span>
                </button>

                <button >
                    <span>
                        {json.category}
                    </span>
                </button>

                <button >
                    <span>
                        Country: {json.country}
                    </span>
                </button>

                <button>
                    <span>
                        Language: {json.language}
                    </span>
                </button>
            </div>

            <div className="bookImgDiv">
                <img height={300} width={300} src={json.image}></img>
            </div>
        </div>
    )
}

export default Book