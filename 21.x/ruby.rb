class String
    def words
        split(' ')
    end
end

puts "this is a string".words()
puts "we can do another one".words()


class Something
    def method
        @a = 5
        # @ - declare var inside of scopes
    end
end

