import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Loader2 } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function AddMovie() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      posterUrl: "",
      rating: 5,
    },
  });

  function onSubmit(data) {
    setLoading(true);

    // FRONTEND ONLY (no backend)
    console.log("Movie data:", data);

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      form.reset();
    }, 800);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg rounded-xl px-6 flex items-center"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Movie
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Add New Movie
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill the form below to add a movie (frontend only).
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            {/* Movie Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Movie Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Inception" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Poster URL */}
            <FormField
              control={form.control}
              name="posterUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Poster URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Rating */}
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Rating</FormLabel>
                  <Select
                    onValueChange={(val) => field.onChange(parseInt(val))}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Stars
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Movie description..." className="min-h-[100px]" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-4 py-2"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-md px-4 py-2 flex items-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Add Movie"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
