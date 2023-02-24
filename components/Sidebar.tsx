import NewChat from "./NewChat"


function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div className="">


                {/* NewChat */}
                <NewChat />

                <div>
                    {/* Model Selection */}
                </div>

                {/* Map through the chatrows */}

            </div>
        </div>
    </div>
  )
}

export default Sidebar