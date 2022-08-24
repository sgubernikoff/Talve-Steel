class Coil < ApplicationRecord
    validates_presence_of :grade,:com_spec,:net,:gross,:quantity,:pkgs
end
