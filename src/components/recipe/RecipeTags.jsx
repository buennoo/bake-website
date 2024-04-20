export default function RecipeTags({ tags }){
    return (
        <div class="tags">
            {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
    );
}