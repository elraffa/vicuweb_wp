wp.blocks.registerBlockType("ourblocktheme/hero", {
    title: "Hero",
    icon: "format-image",
    edit: editComponent,
    save: saveComponent
});

function editComponent() {
    return (
        <div className="page-hero">
            <div className="page-hero__image">
                <h1>Hero</h1>
            </div>
        </div>
    )
}

function saveComponent() {
    return <p>This is from our block</p>;
}