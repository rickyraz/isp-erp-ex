import { Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Todo from "@/sample/todo/app-todo";
import JSONComponent from "@/sample/fetch-example/tryfetch";
import Pokemon from "@/sample/pokemon/pokemonapp";


export default function Landing() {
  return (
    <>
      <div className="flex justify-center space-x-10 capitalize mt-6">
        <Link to="/login">login</Link>
        <Link to="/about">about</Link>
        <Link to="/dashboard">dashboard</Link>
      </div>
      <div className="flex justify-center items-center mt-11 mx-24">
        <Tabs defaultValue="todo" className="w-full ">
          <TabsList>
            <TabsTrigger value="todo">Todo App</TabsTrigger>
            <TabsTrigger value="json">JSON Placeholder</TabsTrigger>
            <TabsTrigger value="pokemon">Pokemon</TabsTrigger>
          </TabsList>
          <TabsContent value="todo">
            <Todo />
          </TabsContent>
          <TabsContent value="json">
            <JSONComponent />
          </TabsContent>
          <TabsContent value="pokemon">
            <Pokemon />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
