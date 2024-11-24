const categories = [
    { title: "Account & Finance", jobs: 300, icon: "📄" },
    { title: "Creative Design", jobs: 100, icon: "💡" },
    { title: "Marketing & Sales", jobs: 150, icon: "📊" },
    { title: "Engineering Job", jobs: 224, icon: "⚙️" },
];

const CategoryList = () => {
    return (
        <div className="mt-10">
            <div className=" m-auto mt-5">
                <h2 className="text-5xl text-center mt-2 mb-2 capitalize font-bold">Job Category List</h2>
                <p className="text-center mt-5 capitalize">
                    Explore careers, discover new paths, and unlock your true potential.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-3/4 m-auto">
                {categories.map((category, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-lg text-center">
                        <div className="text-4xl mb-3">{category.icon}</div>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <p className="mt-2 text-gray-600">{category.jobs}+ Jobs Available</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
