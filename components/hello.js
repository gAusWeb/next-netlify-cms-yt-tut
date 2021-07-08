

export default function test() { 
    console.log(window)
    algoliasearchNetlify({
        appId: "ZGBQPVG7KM",
        apiKey: "4adcaf4f084b53ef5d323f0b609d71c9",
        siteId: "90bd238e-0db3-4b5c-8a3c-bddf662dd1a0",
        branch: "main",
        selector: "input#search",
    });
    return (
        <>
            <p>test</p>
        </>
    )

}