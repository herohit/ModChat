import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown,CircleFadingPlus } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formShema = z.object({
  name: z.string().min(5).max(20),
  description: z.string().min(5).max(100),
  category: z.string().min(3, "").max(10),
});

const AddRoom = () => {
  const categories = ["Webdev", "Javascript", "Games", "Fun", "AI", "Music"];
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formShema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      isPrivate: false,
    },
  });

  const onSubmit = (data) => {
    console.log("room created", data);
    toast.success("Room Created ✅");
  };

  return (
    <div className="min-h-full dark:bg-[#0F1923]">
      <Header />
      <div className="p-3 pt-4 flex gap-3 items-center fixed top-0 w-full dark:bg-[#0F1923] z-50">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold flex gap-2 items-center">
          < CircleFadingPlus /> Add Room
        </h1>
      </div>
      <main className="px-4 py-16 mt-3 space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Room Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Dev Hangout" {...field} />
                  </FormControl>
                  <FormDescription>Name should be unique .</FormDescription>
                </FormItem>
              )}
            />
            {/* Room Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g. Dev Hangout" {...field} />
                  </FormControl>
                  <FormDescription>
                    Description must be upto{" "}
                    <span className="font-bold"> 100</span> words .
                  </FormDescription>
                </FormItem>
              )}
            />
            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Type or select category"
                        {...field}
                        value={inputValue}
                        onFocus={() => {
                          setShowSuggestions(true);
                          setFilteredCategories(categories); // show all initially
                        }}
                        onBlur={() => {
                          // Use timeout to allow click on suggestion
                          setTimeout(() => setShowSuggestions(false), 100);
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          setInputValue(value);
                          field.onChange(value);

                          // Update suggestions as user types

                          setFilteredCategories(
                            categories.filter((cat) =>
                              cat.toLowerCase().includes(value.toLowerCase())
                            )
                          );
                        }}
                      />
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      {showSuggestions && filteredCategories.length > 0 && (
                        <div className="absolute z-10 w-full dark:bg-[#0F1923] border mt-1 rounded shadow">
                          {filteredCategories.map((cat) => (
                            <div
                              key={cat}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                              onClick={() => {
                                setInputValue(cat);
                                field.onChange(cat);
                                setFilteredCategories([]);
                              }}
                            >
                              {cat}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>
                    You can choose or type your own category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Private or Public */}
            <FormField
              control={form.control}
              name="isPrivate"
              render={({ field }) => (
                <FormItem className={"flex items-center gap-4"}>
                  <FormLabel>Private Room</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className={"w-full"}>
              Create Room
            </Button>
          </form>
        </Form>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default AddRoom;
