export default function Navigation() { 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav class="nav nav-pills flex-column flex-sm-row">
                            <a class="flex-sm-fill text-sm-center nav-link" href="/">Home</a>
                            <a class="flex-sm-fill text-sm-center nav-link" href="/about">About</a>
                            <a class="flex-sm-fill text-sm-center nav-link" href="/contact">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
 }