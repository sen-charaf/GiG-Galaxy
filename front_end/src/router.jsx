
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
          {
            path: "/categories",
            element: <InspectCategories />,
          },
        ],
      },
  ]);
  
  export default router;